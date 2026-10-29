const i=`
varying vec3 vBubbleNormal;
varying vec3 vBubblePosition;
void main(){
  vec4 local=vec4(position,1.0);
  vec3 localNormal=normalize(position);
  #ifdef USE_INSTANCING
    local=instanceMatrix*local;
    localNormal=mat3(instanceMatrix)*localNormal;
  #endif
  vec4 world=modelMatrix*local;
  vBubblePosition=world.xyz;
  vBubbleNormal=normalize(mat3(modelMatrix)*localNormal);
  gl_Position=projectionMatrix*viewMatrix*world;
}`,a=`
uniform vec3 bubbleColor;
varying vec3 vBubbleNormal;
varying vec3 vBubblePosition;
void main(){
  vec3 normal=normalize(vBubbleNormal);
  vec3 viewDirection=normalize(cameraPosition-vBubblePosition);
  float facing=clamp(dot(normal,viewDirection),0.0,1.0);
  float fresnel=.02+.98*pow(1.0-facing,3.0);
  vec3 lightDirection=normalize(vec3(-.35,.65,1.0));
  float highlight=pow(max(0.0,dot(reflect(-lightDirection,normal),viewDirection)),40.0);
  vec3 color=mix(bubbleColor,vec3(1.0),fresnel*.6+highlight*.35);
  gl_FragColor=vec4(color,.025+fresnel*.4+highlight*.16);
}`;function r(e,l=14215655){const o=new e.ShaderMaterial({name:"AirBubbleFresnelShell",uniforms:{bubbleColor:{value:new e.Color(l)}},vertexShader:i,fragmentShader:a,transparent:!0,depthWrite:!1,depthTest:!0,side:e.FrontSide,toneMapped:!1});return o.userData.visualRole="particle",o}export{r as c};
