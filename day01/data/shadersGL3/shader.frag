#version 150

uniform float iGlobalTime;
uniform vec2 iResolution;

out vec4 outputColor;

void main()
{
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    outputColor = vec4(uv, 0.5 + sin(iGlobalTime) * 0.5, 1.0);
}
