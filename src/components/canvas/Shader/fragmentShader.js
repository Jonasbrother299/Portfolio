export default /* glsl */ `
uniform float u_intensity;
uniform float u_time;
uniform vec3 u_colorA; // Color A
uniform vec3 u_colorB; // Color B
uniform samplerCube u_reflectionMap; // Cube texture for reflections

varying vec3 vNormal; // Varying normal from vertex shader
varying vec3 vPosition; // Varying position from vertex shader

void main() {
  // Normalize the normal and calculate the reflection vector
  vec3 normal = normalize(vNormal);
  vec3 reflection = reflect(normalize(vPosition - cameraPosition), normal);

  // Sample the cube texture for the reflection color
  vec3 colorFromReflectionMap = textureCube(u_reflectionMap, reflection).rgb;

  // Calculate the distortion factor based on position and intensity
  float distort = 2.0 * vPosition.z * u_intensity;

  // Interpolate between the two colors based on the distort value
  vec3 color = mix(u_colorA, u_colorB, 1.0 - distort);

  // Combine reflection color with the base color
  color += colorFromReflectionMap;

  // Apply an emissive effect by increasing the brightness
  // This ensures the final color can glow
  color = color * u_intensity; // Scale the color by intensity

  // Output the final color with full opacity
  gl_FragColor = vec4(color, 1.0);
}
`;
