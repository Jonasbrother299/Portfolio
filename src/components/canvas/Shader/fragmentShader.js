export default /* glsl */ `
uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uTextureSize;
uniform vec2 uPlaneSize;
uniform float uOpacity;

varying vec2 vUv;
varying float vOffsetY;

vec2 getUv(vec2 uv, vec2 textureSize, vec2 planeSize, float scale){
    vec2 tempUv = uv - vec2(.5);

    float planeAspect = planeSize.x / planeSize.y;
    float textureAspect = textureSize.x / textureSize.y;
    if(planeAspect < textureAspect){
        tempUv = tempUv * vec2(planeAspect / textureAspect, 1.) * .5 * scale;
    }else{
        tempUv = tempUv * vec2(1, textureAspect / planeAspect) * .5 * scale;
    }

    tempUv += .5;

    return tempUv;
}

void main() {
    float scale = 1.5; // Adjust this value to scale the texture
    vec2 newUv = getUv(vUv, uTextureSize, uPlaneSize, scale);

    vec4 color = texture2D(uTexture, newUv);
    color.a = uOpacity;

    gl_FragColor = color;
}
`;
