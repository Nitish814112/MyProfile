import React from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container about">
      <h1 className="text-center mb-4">ABOUT ME</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="row justify-content-center mb-2">
            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iZTg3ZGRjNjItNzUyOC00MmE1LThiMzctZjc0ZWQwMzUxMDE5IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjExMzEiIGhlaWdodD0iODEyLjIwNjExIiB2aWV3Qm94PSIwIDAgMTEzMSA4MTIuMjA2MTEiPjx0aXRsZT5zb2Z0d2FyZSBlbmdpbmVlcjwvdGl0bGU+PHJlY3QgeD0iNjg5LjMyODI0IiB5PSI1MS4yNjcxOCIgd2lkdGg9IjgwLjgwMTUzIiBoZWlnaHQ9IjMwLjA5MTYiIGZpbGw9IiNmOWE4MjYiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjgyMy42MjU5NSIgd2lkdGg9IjgwLjgwMTUzIiBoZWlnaHQ9IjMwLjA5MTYiIGZpbGw9IiNmOWE4MjYiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjgyOS4xOTg0NyIgeT0iOTMuMDYxMDciIHdpZHRoPSI4MC44MDE1MyIgaGVpZ2h0PSIzMC4wOTE2IiBmaWxsPSIjZjlhODI2IiBvcGFjaXR5PSIwLjMiLz48cmVjdCB4PSI1NzAuNjMzNTkiIHk9IjEyNy42MTA2OSIgd2lkdGg9IjgwLjgwMTUzIiBoZWlnaHQ9IjMwLjA5MTYiIGZpbGw9IiNmOWE4MjYiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjU0NSIgeT0iMjUxLjMyMDYxIiB3aWR0aD0iODAuODAxNTMiIGhlaWdodD0iMzAuMDkxNiIgZmlsbD0iI2Y5YTgyNiIgb3BhY2l0eT0iMC4zIi8+PHJlY3QgeD0iNjY3LjAzODE3IiB5PSIyNDguNTM0MzUiIHdpZHRoPSI4MC44MDE1MyIgaGVpZ2h0PSIzMC4wOTE2IiBmaWxsPSIjZjlhODI2IiBvcGFjaXR5PSIwLjMiLz48cG9seWxpbmUgcG9pbnRzPSI4MjMuNjI2IDE0Ljg1NiA3NzAuMTMgNjUuNjE2IDgyOS4xOTggMTA4LjEwNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48bGluZSB4MT0iNjg5LjMyODI0IiB5MT0iNjUuNjE2NDEiIHgyPSI2MTEuMDM0MzUiIHkyPSIxMjcuNjEwNjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBvbHlsaW5lIHBvaW50cz0iNTg1LjQwMSAyNTEuMjk3IDYxMS4wMzQgMTU3LjcwMiA3MDcuNDM5IDI0OC41MzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHJlY3QgeD0iMTQ0LjMyODI0IiB5PSI4Mi4yNjcxOCIgd2lkdGg9IjgwLjgwMTUzIiBoZWlnaHQ9IjMwLjA5MTYiIGZpbGw9IiNmOWE4MjYiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjI3OC42MjU5NSIgeT0iMzEiIHdpZHRoPSI4MC44MDE1MyIgaGVpZ2h0PSIzMC4wOTE2IiBmaWxsPSIjZjlhODI2IiBvcGFjaXR5PSIwLjMiLz48cmVjdCB4PSIyODQuMTk4NDciIHk9IjEyNC4wNjEwNyIgd2lkdGg9IjgwLjgwMTUzIiBoZWlnaHQ9IjMwLjA5MTYiIGZpbGw9IiNmOWE4MjYiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjI1LjYzMzU5IiB5PSIxNTguNjEwNjkiIHdpZHRoPSI4MC44MDE1MyIgaGVpZ2h0PSIzMC4wOTE2IiBmaWxsPSIjZjlhODI2IiBvcGFjaXR5PSIwLjMiLz48cmVjdCB5PSIyODIuMzIwNjEiIHdpZHRoPSI4MC44MDE1MyIgaGVpZ2h0PSIzMC4wOTE2IiBmaWxsPSIjZjlhODI2IiBvcGFjaXR5PSIwLjMiLz48cmVjdCB4PSIxMjIuMDM4MTciIHk9IjI3OS41MzQzNSIgd2lkdGg9IjgwLjgwMTUzIiBoZWlnaHQ9IjMwLjA5MTYiIGZpbGw9IiNmOWE4MjYiIG9wYWNpdHk9IjAuMyIvPjxwb2x5bGluZSBwb2ludHM9IjI3OC42MjYgNDUuODU2IDIyNS4xMyA5Ni42MTYgMjg0LjE5OCAxMzkuMTA3IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxsaW5lIHgxPSIxNDQuMzI4MjQiIHkxPSI5Ni42MTY0MSIgeDI9IjY2LjAzNDM1IiB5Mj0iMTU4LjYxMDY5IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwb2x5bGluZSBwb2ludHM9IjQwLjQwMSAyODIuMjk3IDY2LjAzNCAxODguNzAyIDE2Mi40MzkgMjc5LjUzNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48bGluZSB4MT0iMzY1IiB5MT0iMTM5LjEwNjg3IiB4Mj0iNDU2LjYzMzU5IiB5Mj0iMTM5LjEwNjg3IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxyZWN0IHg9IjQxNS41IiB5PSIxMjMuNzA2MTEiIHdpZHRoPSI5NSIgaGVpZ2h0PSIzMCIgZmlsbD0iI2Y5YTgyNiIvPjxsaW5lIHgxPSI1MTAuNjIzMjIiIHkxPSIxMzguNzA2MTEiIHgyPSI1NzAuNjMzNTkiIHkyPSIxMzguNzA2MTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGxpbmUgeDE9IjQxNS4wNDQ4NiIgeTE9IjEzOC43MDYxMSIgeDI9IjM1OS40Mjc0OCIgeTI9IjQ1Ljg1NjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGVsbGlwc2UgY3g9IjY5MSIgY3k9IjcxNC4yMDYxMSIgcng9IjQ0MCIgcnk9Ijk4IiBmaWxsPSIjZjJmMmYyIi8+PHBvbHlnb24gcG9pbnRzPSI4OTQuOTg0IDM5MS42MTEgODUyLjA3OCA2MDYuNTgyIDg0Mi43OSA2MDYuNTgyIDg0MS43NjggNjA0Ljk5NCA4MzguODA5IDYwMC4zOSA4NzUuOTY0IDM5OS41NzIgODgxLjYwNCAzOTcuMjEgODk0Ljk4NCAzOTEuNjExIiBmaWxsPSIjNDc0NjVhIi8+PHBvbHlnb24gcG9pbnRzPSI4ODEuNjA0IDM5Ny4yMSA4NDEuNzY4IDYwNC45OTQgODM4LjgwOSA2MDAuMzkgODc1Ljk2NCAzOTkuNTcyIDg4MS42MDQgMzk3LjIxIiBvcGFjaXR5PSIwLjEiLz48cG9seWdvbiBwb2ludHM9Ijk1OS41NjQgNjg0LjQzMiA5NDguNTMzIDY4Ny45ODggOTQ1Ljg1MiA2ODguODU1IDk0Mi4zMTMgNjgwLjg5MyA4ODEuNjA0IDQwMy45NiA4ODcuOTE2IDQwMi41NDUgOTAxLjE3NyAzOTkuNTcyIDk1OS41NjQgNjg0LjQzMiIgZmlsbD0iIzQ3NDY1YSIvPjxwb2x5Z29uIHBvaW50cz0iOTQ4LjUzMyA2ODcuOTg4IDk0NS44NTIgNjg4Ljg1NSA5NDIuMzEzIDY4MC44OTMgODgxLjYwNCA0MDMuOTYgODg3LjkxNiA0MDIuNTQ1IDk0OC41MzMgNjg3Ljk4OCIgb3BhY2l0eT0iMC4xIi8+PHBvbHlnb24gcG9pbnRzPSI0MzMuNjM2IDM5MS42MTEgNDIzLjkwNSA2NzAuMjc3IDQxMi43NTMgNjcyLjc1NCA0MTEuOTYyIDY3Mi45MzEgNDA4Ljg2NSA2NjcuMTgxIDQxNS4wNTggMzk0LjI2NCA0MjEuMDE2IDM5My40MTUgNDMzLjYzNiAzOTEuNjExIiBmaWxsPSIjNDc0NjVhIi8+PHBvbHlnb24gcG9pbnRzPSI0MjEuMDE2IDM5My40MTUgNDEyLjc1MyA2NzIuNzU0IDQxMS45NjIgNjcyLjkzMSA0MDguODY1IDY2Ny4xODEgNDE1LjA1OCAzOTQuMjY0IDQyMS4wMTYgMzkzLjQxNSIgb3BhY2l0eT0iMC4xIi8+PHBvbHlnb24gcG9pbnRzPSI0OTEuNTgxIDc2OC45MTcgNDgwLjA0NSA3NzAuOTA3IDQ3OC43NTMgNzcxLjEyOCA0NzUuMjE1IDc2My42MDkgNDE5LjAzOSAzOTkuNTcyIDQyMC42NTggMzk5LjA4MSA0MjkuMjEzIDM5Ni40NzYgNDkxLjU4MSA3NjguOTE3IiBmaWxsPSIjNDc0NjVhIi8+PHBvbHlnb24gcG9pbnRzPSI0ODAuMDQ1IDc3MC45MDcgNDc4Ljc1MyA3NzEuMTI4IDQ3NS4yMTUgNzYzLjYwOSA0MTkuMDM5IDM5OS41NzIgNDIwLjY1OCAzOTkuMDgxIDQ4MC4wNDUgNzcwLjkwNyIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTc3MC4yNDYxMSw0MTIuOTQ4NzJsNDIuOTUxMTgsNTQuODgyMDdhMTMuOTI3OSwxMy45Mjc5LDAsMCwwLDEyLjU4ODQyLDUuMjQ5NDdsMTc2LjMxNzktMjAuNjQ5ODRhMTMuOTI3OTEsMTMuOTI3OTEsMCwwLDAsMTIuMzA3NzktMTMuODMzMzZ2LTQwLjY4NzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjN2E3OTljIi8+PHBhdGggZD0iTTg4MC4zODc1LDM3Ny44OTgzNWgxMS45NDI4N2EwLDAsMCwwLDEsMCwwdjE3LjIzNjQ5YTQuNDM3Niw0LjQzNzYsMCwwLDEtNC40Mzc2LDQuNDM3Nkg4ODQuODI1MWE0LjQzNzYsNC40Mzc2LDAsMCwxLTQuNDM3Ni00LjQzNzZWMzc3Ljg5ODM1QTAsMCwwLDAsMSw4ODAuMzg3NSwzNzcuODk4MzVaIiBmaWxsPSIjNDc0NjVhIi8+PHBhdGggZD0iTTQ1My41MzksNDQ3Ljg5MjY3bDQyLjk1MTE4LDU0Ljg4MjA2YTEzLjkyNzkxLDEzLjkyNzkxLDAsMCwwLDEyLjU4ODQyLDUuMjQ5NDhsMTc2LjMxNzktMjAuNjQ5ODRBMTMuOTI3OTMsMTMuOTI3OTMsMCwwLDAsNjk3LjcwNDI1LDQ3My41NDFWNDMyLjg1MzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjN2E3OTljIi8+PHBhdGggZD0iTTU2My42ODAzNSw0MTIuODQyMjloMTEuOTQyODdhMCwwLDAsMCwxLDAsMHYxNy4yMzY0OWE0LjQzNzYsNC40Mzc2LDAsMCwxLTQuNDM3Niw0LjQzNzZINTY4LjExOGE0LjQzNzYsNC40Mzc2LDAsMCwxLTQuNDM3Ni00LjQzNzZWNDEyLjg0MjI5QTAsMCwwLDAsMSw1NjMuNjgwMzUsNDEyLjg0MjI5WiIgZmlsbD0iIzQ3NDY1YSIvPjxwYXRoIGQ9Ik01MDIuODg0NzUsNDc1LjY4ODEybDUyNC40NTkzNC02MS4wOTAyN2E3LjcxMjU0LDcuNzEyNTQsMCwwLDAsMi41Nzc1MS0xNC41NDg2NmwtOTMuODE2NzgtNDcuMTgxODdhMTA4LjU4Njc4LDEwOC41ODY3OCwwLDAsMC01OS44MDI0Ny0xMS4wMTcwOEw0MTAuMzYwNSwzODkuMzU5OGE4LjkxODQzLDguOTE4NDMsMCwwLDAtNS40NTg3NSwxNS4wOTQ5NWw1NC4yNTkxMSw1NS42Njg0NEE1Mi42NzMzOSw1Mi42NzMzOSwwLDAsMCw1MDIuODg0NzUsNDc1LjY4ODEyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0LjUgLTQzLjg5Njk1KSIgZmlsbD0iIzQ3NDY1YSIvPjxwYXRoIGQ9Ik0xMDg1LjA0MzY4LDQwNi4zMTg0NWwtNS42MS0zLjEwMXMtNi4wNTYyOCw0LjQ1ODExLTEwLjk5LDIzLjIzOTY1LDkuMjIwNzQuMjAzNzUsOS4yMjA3NC4yMDM3NWw2LjE5MjYtMTIuODI3NTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjNDc0NjVhIi8+PHBhdGggZD0iTTEwMjUuMDI3MjgsNTc4LjM3OTU1cy01Ljc1MDI3LDI2Ljk4Mi04LjQwNDI0LDM0LjUwMTYyYy0xLjMwMDQyLDMuNjgwMTgtNy41ODE1Nyw3LjA0NjI5LTE0LjU0MzcxLDkuNjIwNjRhOTcuMzc4NjksOTcuMzc4NjksMCwwLDEtMTkuMDczMjUsNC45NzYyYy03LjUxOTU4Ljg4NDY2LTEwMy45NDcxOC0xNC4xNTQ1MS0xNTAuODM0LTI0LjMyODA2LTMxLjU4NjY0LTYuODUxNjctMzUuNjY5NDMtMTQuNzExODUtMzQuOTcwNTEtMTkuMTA4NmE2LjM3OTc4LDYuMzc5NzgsMCwwLDEsMS43OTU4OC0zLjQ1MDE1czQ2LjQ0NDQ4LTMxLjQwNTMyLDYyLjgxMDYzLTQ2LjQ0NDQ5LDQ4LjY1NjEzLTMuMDk2Myw4NC4wNDI0LDMuMDk2M1MxMDI1LjAyNzI4LDU3OC4zNzk1NSwxMDI1LjAyNzI4LDU3OC4zNzk1NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiM0NzQ2NWEiLz48cGF0aCBkPSJNMTA3OS40MzM2Nyw0MDMuMjE3NXMyMS42NzQxLDE0LjE1NDUxLTUxLjMxMDA5LDQzLjM0ODE4YzAsMC0zOS42NjksMjIuMzY2NTYtMzQuNTA1MDksMTE0LjUwMzE4YTI1LjI2OTcxLDI1LjI2OTcxLDAsMCwwLDMuNjczLDExLjcwMmM3LjUzMDIsMTIuMzg1MiwyMy42NjYzNCw0My43Mzc0My0zLjIyNzIzLDQ3LjYyOTkyVjYyNy40NzhzNDguNjU2MTMtMjQuMzI4MDYsNTMuOTY0MDctNDUuMTE3NSwyMy4wMDEwNy0xMzYuMjM3MTUsMzEuODQ3NjQtMTQ2Ljg1M1MxMDk0LjQ3Mjg0LDQwOC4wODMxMSwxMDc5LjQzMzY3LDQwMy4yMTc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0LjUgLTQzLjg5Njk1KSIgZmlsbD0iIzQ3NDY1YSIvPjxwYXRoIGQ9Ik0xMDAyLjA3OTMzLDYyMi41MDE4MWE5Ny4zNzg2OSw5Ny4zNzg2OSwwLDAsMS0xOS4wNzMyNSw0Ljk3NjJjLTcuNTE5NTguODg0NjYtMTAzLjk0NzE4LTE0LjE1NDUxLTE1MC44MzQtMjQuMzI4MDYtMzEuNTg2NjQtNi44NTE2Ny0zNS42Njk0My0xNC43MTE4NS0zNC45NzA1MS0xOS4xMDg2LDIwLjc2Mjg3LDcuMDk5MzcsODguMTgyNjQsMjkuNjMxNTgsMTEyLjM3OCwzMS40OTM3OSwyOC43NTEzNSwyLjIxMTY0LDgzLjY3OTY2LDguMzYsODcuODQyLDQuMThDOTk5LjAyMjc3LDYxOC4xMDUwNywxMDAwLjY2Mzc5LDYxOS44MDM1OSwxMDAyLjA3OTMzLDYyMi41MDE4MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik03NDkuNDU2NjcsODA2LjYyMWw0Mi4wMjEyLTE5MS45NzA1NHM3LjUxOTU5LTIwLjM0NzEsMjQuNzcwMzktMTkuNDYyNDVMODMyLjE3MjA5LDYwMy4xNXMtMjYuNTM5NzEtNi4xOTI2LTMyLjI5LDE0LjE1NDVTNzU3LjQxODU4LDgwNi42MjEsNzU3LjQxODU4LDgwNi42MjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjNDc0NjVhIi8+PHBvbHlnb24gcG9pbnRzPSI4MTUuODA4IDY3NS4xNDMgODMyLjYxNiA1NTcuOTI2IDg0MC4xMzYgNTU3LjkyNiA4MjIuODg1IDY3NS4xNDMgODE1LjgwOCA2NzUuMTQzIiBmaWxsPSIjNDc0NjVhIi8+PHBhdGggZD0iTTEwMTEuMzE1MSw4MzMuNjAzMDVsLTE1LjkyMzgzLTE4My4xMjRzMC0xNS40ODE1LDcuOTYxOTItMjMuMDAxMDgsMzMuNjY0OTQtMjguOTcwMTEsMzMuNjY0OTQtMjguOTcwMTEsNi41ODY5NC0xLjU1MDU1LDExLjg5NDg4LDEzLjQ4ODYxLDQyLjAyMTIsMTY1LjQzMDgzLDQyLjAyMTIsMTY1LjQzMDgzbC03LjA3NzI1LDMuMDk2M0wxMDM4LjI5NzEzLDYwNy4xMzA5bC0zMS40MDUzMiwyOS42MzZzLTYuMTkyNTksMTEuMDU4MjEtMy4wOTYzLDIxLjIzMTc2LDE0LjU5Njg0LDE3NS42MDQzOCwxNC41OTY4NCwxNzUuNjA0MzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjNDc0NjVhIi8+PHBvbHlnb24gcG9pbnRzPSI5MjcuNzE3IDU3OS4xNTggOTY3LjUyNiA1OTAuNjU4IDk3Ni4zNzMgNTgyLjI1NCA5NTMuMzcyIDU3OS4xNTggOTI3LjcxNyA1NzkuMTU4IiBmaWxsPSIjNDc0NjVhIi8+PHBhdGggZD0iTTYwOC4zMTI3NSwzMDAuMjAxMTdsNi40NTQ5Miw5Ni44MjM3MywxNDEuMTAyNzYtMTMuNzEyMTgtNS42MTQ3OS05NC42NDkzOWE5LjUxOTUyLDkuNTE5NTIsMCwwLDAtMTAuMzAwNzEtOC45MjIzTDYxNy4wMTMzLDI5MC4wODE5MUE5LjUxOTUzLDkuNTE5NTMsMCwwLDAsNjA4LjMxMjc1LDMwMC4yMDExN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiM3YTc5OWMiLz48cG9seWdvbiBwb2ludHM9Ijc2OC43IDM2Ny4yODIgNjI4LjAzOSAzODIuNjI3IDYyMi43MzEgMzgzLjIwNiA1ODEuNTk1IDM1Ni42NjcgNTgxLjU5NSAzNTAuOTE2IDcyMS4zNyAzMzguMzI4IDc2OC43IDM2Ny4yODIiIGZpbGw9IiM3YTc5OWMiLz48cG9seWdvbiBwb2ludHM9IjYyOC4wMzkgMzgyLjYyNyA2MjIuNzMxIDM4My4yMDYgNTgxLjU5NSAzNTYuNjY3IDU4MS41OTUgMzUxLjUxOCA2MjguMDM5IDM4Mi42MjciIG9wYWNpdHk9IjAuMSIvPjxwb2x5Z29uIHBvaW50cz0iNTgzLjM2NCAyNTUuMzczIDU4OC4yMyAzNDEuNjI3IDcxMi4wODIgMzMwLjEyNyA3MDcuNjU4IDI0Ni4wODQgNTgzLjM2NCAyNTUuMzczIiBmaWxsPSIjOTQ5M2I2Ii8+PHBvbHlnb24gcG9pbnRzPSI2NTcuMjMzIDM2NS41MTMgNjcyLjI3MiAzNzUuNjg3IDcxNy44MzIgMzcxLjI2MyA3MDIuMzUgMzYxLjUzMiA2NTcuMjMzIDM2NS41MTMiIG9wYWNpdHk9IjAuMSIvPjxwb2x5Z29uIHBvaW50cz0iNTk1Ljc0OSAzNTMuMTI4IDYxNC43NjkgMzY3LjI4MiA3MzYuNDEgMzU1Ljc4MiA3MTQuNzM2IDM0MS42MjcgNTk1Ljc0OSAzNTMuMTI4IiBmaWxsPSIjOTQ5M2I2Ii8+PHJlY3QgeD0iODExLjYwNTQzIiB5PSIyMjIuNDE5OSIgd2lkdGg9Ijg5Ljc5MjY3IiBoZWlnaHQ9Ijg5Ljc5MjY3IiBmaWxsPSIjZmY2NTg0Ii8+PHJlY3QgeD0iODExLjYwNTQzIiB5PSIyMjIuNDE5OSIgd2lkdGg9Ijg5Ljc5MjY3IiBoZWlnaHQ9Ijg5Ljc5MjY3IiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNODc3LjAyOSwzMDcuODcwNjlzMTIuNjY2ODEsMzQuMzA1OTUsMCw0MC42MzkzNiw0NS4zODk0MSwwLDQ1LjM4OTQxLDBsMTYuMzYxMy0xMy4xOTQ2cy0zNi45NDQ4Ny0xMC41NTU2OC0zMS42NjctMzQuODMzNzNTODc3LjAyOSwzMDcuODcwNjksODc3LjAyOSwzMDcuODcwNjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjZmJiZWJlIi8+PHBhdGggZD0iTTg3Ny4wMjksMzA3Ljg3MDY5czEyLjY2NjgxLDM0LjMwNTk1LDAsNDAuNjM5MzYsNDUuMzg5NDEsMCw0NS4zODk0MSwwbDE2LjM2MTMtMTMuMTk0NnMtMzYuOTQ0ODctMTAuNTU1NjgtMzEuNjY3LTM0LjgzMzczUzg3Ny4wMjksMzA3Ljg3MDY5LDg3Ny4wMjksMzA3Ljg3MDY5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0LjUgLTQzLjg5Njk1KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTc3My4wNTU2Myw2NTEuOTg1NzRzNDcuNTAwNTQsNjcuMDI4NTUsMzkuNTgzNzgsODUuNTAxLTMuNjk0NDgsMzAuMDgzNjgtMTkuNTI4LDM2LjQxNzA4LTIwLjA1NTc4LDE3Ljk0NDY1LTYuMzMzNCwxNy40MTY4NywzMS42NjctNC4yMjIyNywzNC4zMDU5NC04Ljk3MjMyLDguOTcyMzMtMjcuNDQ0NzYsMTcuOTQ0NjUtMzAuNjExNDdTODY0Ljg5LDczNi40MzExNSw4NTIuNzUxLDcyMS42NTMyMXMtNDIuNzI1NC02OS4yMTA0OC00MC4zNjI5Mi03NC43MTY4MVM3NzMuMDU1NjMsNjUxLjk4NTc0LDc3My4wNTU2Myw2NTEuOTg1NzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjZmJiZWJlIi8+PHBhdGggZD0iTTg3Mi4yNzksNTE5LjUxMnMtOTguMTY3NzksNi4zMzM0MS0xMjMuNTAxNDIsMzAuMDgzNjgsMjIuMTY2OTIsMTEyLjQxOCwyNy40NDQ3NiwxMTMuNDczNTIsNDYuNDQ1LTMuMTY2Nyw0NC44NjE2Mi0xNC43Nzc5NC0yOS41NTU4OS01OS4xMTE3OS0yOS41NTU4OS01OS4xMTE3OSwzNi40MTcwOC0xMy4xOTQ2LDU2LjQ3Mjg3LTE2LjM2MTMsNDIuMjIyNzEtMTcuOTQ0NjUsNDIuMjIyNzEtMTcuOTQ0NjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjOTQ5M2I2Ii8+PHBhdGggZD0iTTgyNy40MTczNiw1MDQuNzM0MDZzMS41ODMzNSw1OC41ODQsMTYuMzYxMyw2MC42OTUxNCwwLTQ0Ljg2MTYzLDAtNDQuODYxNjNsLS41Mjc3OC0xNy45NDQ2NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiNmYmJlYmUiLz48cGF0aCBkPSJNODcyLjI3OSwzNTEuMTQ5cy0yNy40NDQ3Ni03LjkxNjc2LTMyLjcyMjYsMTMuMTk0NTktNi44NjExOSw5My45NDU1Mi02Ljg2MTE5LDkzLjk0NTUybC05LjUwMDExLDU4LjA1NjIyczE3LjQxNjg3LTUuMjc3ODQsMjEuMTExMzUtMi42Mzg5MmwyMi4xNjY5Mi0yNy45NzI1NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiNmOWE4MjYiLz48cGF0aCBkPSJNODcyLjI3OSwzNTEuMTQ5cy0yNy40NDQ3Ni03LjkxNjc2LTMyLjcyMjYsMTMuMTk0NTktNi44NjExOSw5My45NDU1Mi02Ljg2MTE5LDkzLjk0NTUybC05LjUwMDExLDU4LjA1NjIyczE3LjQxNjg3LTUuMjc3ODQsMjEuMTExMzUtMi42Mzg5MmwyMi4xNjY5Mi0yNy45NzI1NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik05MDkuNzc5MzIsNjYzLjIyNTQ5czE4LjQ0NDc1LDM2LjI2MDgsMjkuNTI4MjEsMzUuNzMzLDIxLjYzOTE0LTcuMzg5LDI2LjkxNywxNC4yNTAxNi0xLjA1NTU2LDE1LjgzMzUyLDUuMjc3ODQsMjguNTAwMzMsNy4zODksMzQuODMzNzMtNC43NSw0MC4xMTE1Ny0yMy4yMjI0OSw1LjgwNTYyLTIzLjc1MDI3LDAsMTAuNTU1NjctNS44MDU2Mi0yLjExMTE0LTI2LjM4OTE5LTM5LjU4Mzc4LTU4LjA1NjIyLTUwLjY2NzI0LTYxLjc1MDcxUzkwOS43NzkzMiw2NjMuMjI1NDksOTA5Ljc3OTMyLDY2My4yMjU0OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiNmYmJlYmUiLz48cGF0aCBkPSJNOTU3Ljc4LDQ5Ny44NzI4N3MzOC4wMDA0NCw2My4zMzQwNiwxMy4xOTQ2LDgxLjgwNjQ5LTk4LjY5NTU3LDUzLjgzNC05OC42OTU1Nyw1My44MzQsMzkuNTgzNzgsMjYuOTE3LDQxLjY5NDkyLDM1Ljg4OTMtMTkuMDAwMjIsMzMuMjUwMzgtMjYuMzg5MTksMzMuNzc4MTYtMjkuMDI4MTEtMjQuMjc4MDUtNTIuMjUwNi0zMC42MTE0Ni0zNy40NzI2NS01MS43MjI4MS0xMi4xMzktNjguNjExOSw0OS4wODM5LTQ0Ljg2MTYyLDQ5LjA4MzktNDQuODYxNjJsLTcuMzg0Ny00MC42MzM2OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiM5NDkzYjYiLz48cGF0aCBkPSJNOTI0LjgzOTg5LDI4Ni42NjRjMCwyMi40NDQ0OS0yMi45OTEzMyw0MC45OTg2My00NS40MzU4Miw0MC45OTg2M2E0MC42MzkzNSw0MC42MzkzNSwwLDEsMSwwLTgxLjI3ODcxQzkwMS44NDg1NiwyNDYuMzgzODgsOTI0LjgzOTg5LDI2NC4yMTk0Niw5MjQuODM5ODksMjg2LjY2NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiNmYmJlYmUiLz48cGF0aCBkPSJNODg5LjY5NTg1LDM0NS4zNDMzNHMzNi40MTcwOC0xNS44MzM1MSwzNi40MTcwOC0xNy45NDQ2NSwyMS4xMTEzNiw0Ljc1MDA2LDI1Ljg2MTQxLDguOTcyMzMsNy4zODksMy42OTQ0OSwxMC41NTU2OCwxMi4xMzktMTUuODMzNTIsODcuMDg0MzMtMTUuODMzNTIsODcuMDg0MzMsMTAuNTU1NjgsNjAuNjk1MTQsMTYuMzYxMyw2Ni41MDA3NlM5MTYuMDg1LDUxNi4zNDUzLDkxNi4wODUsNTE2LjM0NTNzLTM0LjgzMzczLDYuMzMzNDEtNDAuNjM5MzUsOC45NzIzMy0xNi4zNjEzLDYuMzMzNC0xNC4yNTAxNiwwLDExLjA4MzQ2LTExLjA4MzQ2LTQuMjIyMjgtMTkuMDAwMjJjMCwwLDUuMjc3ODQtMjUuODYxNDEsMC0zNy40NzI2NXMtMjkuNTU1ODktNTMuODM0LTEwLjAyNzg5LTg0LjQ0NTQxLDI4LjUwMDMzLTQxLjY5NDkzLDI4LjUwMDMzLTQxLjY5NDkzUzg4Mi4zMDY4OCwzNDguNTEwMDUsODg5LjY5NTg1LDM0NS4zNDMzNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiNmOWE4MjYiLz48cGF0aCBkPSJNOTAxLjMwNzEsNDg5LjQyODMzUzg2MC4xNCw1MDcuNjg3MTMsODQ3LjczNyw1MDkuMzc3M3MtNDkuODc1NTcsMTEuMTkwMjctMjkuMjkyLDE5LjYzNDgxLDUxLjcyMjgxLTQuMjIyMjcsNTEuNzIyODEtNC4yMjIyN2w0My44MDYwNi0xOC40NzI0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIGZpbGw9IiNmYmJlYmUiLz48cGF0aCBkPSJNOTQ1LjYyOTMzLDM0My43MjQzM3MxNS4yMDE3OC03LjM1MzMxLDE5LjQyNCwxOC41MDgxLDE5LjAwMDIyLDEwNy42Njc4OSwwLDExOS44MDY5Mi02Mi44MDYyOCwzMS42NjctNjIuODA2MjgsMzEuNjY3LTI1Ljg2MTQtMTcuNDE2ODYtMTMuNzIyMzctMjMuNzUwMjcsNDEuMTY3MTMtMjQuMjc4MDYsNDUuMzg5NC0zMC42MTE0Niw4LjQ4ODI5LTc3LjAyNywxLjA5OTMyLTg4LjYzODI5Uzk0NS42MjkzMywzNDMuNzI0MzMsOTQ1LjYyOTMzLDM0My43MjQzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNC41IC00My44OTY5NSkiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik05NDQuNTg1MzcsMzM3LjQyNjU5czIxLjExMTM1LTEuMDU1NTcsMjUuMzMzNjIsMjQuODA1ODQsMTkuMDAwMjIsMTA3LjY2Nzg5LDAsMTE5LjgwNjkyLTYyLjgwNjI3LDMxLjY2Ny02Mi44MDYyNywzMS42NjctMjUuODYxNDEtMTcuNDE2ODYtMTMuNzIyMzgtMjMuNzUwMjcsNDEuMTY3MTQtMjQuMjc4MDYsNDUuMzg5NDEtMzAuNjExNDZTOTM1LjYxMywzODcuMDM4MjcsOTI4LjIyNDA3LDM3NS40MjcsOTQ0LjU4NTM3LDMzNy40MjY1OSw5NDQuNTg1MzcsMzM3LjQyNjU5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0LjUgLTQzLjg5Njk1KSIgZmlsbD0iI2Y5YTgyNiIvPjxwYXRoIGQ9Ik04NjkuMzkzNjMsMjE4LjYxMTg0Yy02LjQ3OTM3Ljg4MTc5LTEzLjQyOTA3LDMuMjUyLTE2LjY4OTM2LDguOTIwMzctMS41OTUzMiwyLjc3MzY1LTIuMTExMDcsNi4wMjc0My0zLjM0LDguOTgxNzMtMy4zOTE0NCw4LjE1MjYyLTExLjYyOCwxMy4wMjExMS0xNy41NzQ0OSwxOS41NDg0Ni03Ljc0OTcsOC41MDY3MS0xMS41OTgyOSwyMS4zMjU2OS03LjAyNzc2LDMxLjg4NjU3LDEuNzY5ODUsNC4wODk1Miw0LjY0NDA2LDcuNTkyOTQsNi44MjM3NCwxMS40Nzk1Myw2LjA4MSwxMC44NDMwNyw2LjQwNTQ1LDIzLjg2NTQxLDYuNTc4NCwzNi4yOTYwNWwuMzQwMDYsMjQuNDQxM2MuMDUxOTMsMy43MzIwOC4wOTMzNiw3LjUzOTUzLTEuMDMwMywxMS4wOTg4MnMtMy42MzI5Myw2Ljg5MjczLTcuMTkyMTIsOC4wMTY2OGExOC42NDAwNywxOC42NDAwNywwLDAsMCwyMS43MDc3NC03LjQxMjc3LDE5LjA0OTM5LDE5LjA0OTM5LDAsMCwxLTUuODIyMjgsMTYuODk5NDJjOS42NzYtMi4yNzg3MSwxNy43OTAxNy05LjMxNjM2LDIyLjkwMjExLTE3Ljg0MTk1czcuNDgyNC0xOC40NDIzOSw4LjU0NDcxLTI4LjMyNjE3Yy41NjE4Ni01LjIyNzYyLjc1OTg2LTEwLjYzMzA4LS44OTE3LTE1LjYyNDY4LTEuMTYzMjEtMy41MTU2Ni0zLjE5MjEtNi42Njc1Ni01LjExODItOS44MzAzMi00Ljk2NTUzLTguMTUzNjgtOS40MzY4OS0xNi44MjYxNC0xMS4wMzcxOS0yNi4yMzc3M3MuMDA2NDEtMTkuNzM4LDYuMTE3NjYtMjcuMDcyMjRhMjQuNDU0NDUsMjQuNDU0NDUsMCwwLDEsMTkuMzE1LTguODU2MzUsMjEuNTAyODksMjEuNTAyODksMCwwLDEsMTcuOTI4MiwxMC45NzUzOGMxLjQxMTgsMi42NTc2NCwzLjQyMTQ1LDYuMjU5NTQsNi4yODIyNiw1LjMyNTc1YTE1LjUyMjg0LDE1LjUyMjg0LDAsMCwwLDEuNTQ5LS43NjA1NGMzLjE5MDQ0LTEuNDUxOTQsNi44MTQ0MiwxLjQxMjU2LDguMjIxMjUsNC42MjMxNSw0LjQzNzMzLDEwLjEyNjY1LTMuNzM3NzcsMjEuMTgxMzEtNC41ODI3NiwzMi4yMDUxMy0uNzg2LDEwLjI1NDc0LDQuOTMxMjYsMTkuOTI2MTMsMTEuNzY1MzIsMjcuNjEyYTkwLjcxNzI2LDkwLjcxNzI2LDAsMCwwLDQ0LjM1MjczLDI3LjI0OTY4LDEyLjQ0OTE3LDEyLjQ0OTE3LDAsMCwxLTYuNDMzNy0zLjk5NjYzLDg0LjQ3MDA3LDg0LjQ3MDA3LDAsMCwwLDIwLjc1NjUzLTEuNzRjLTcuNDI2MjUtNS41OTYzOS0xNC45MDQ4Mi0xMS4yNDA0NC0yMS4xMDQ3MS0xOC4xNzA4M3MtMTEuMTEwMy0xNS4zMTYtMTIuNDQ3MzgtMjQuNTE4MmMtMS43OTQ0MS0xMi4zNDk4NiwyLjgwNTMzLTI1LjcyMzQ3LTIuNDUzNjEtMzcuMDQwODItNC44MDc5MS0xMC4zNDY3MS0xNi43MzE5NS0xNi4xMjg1MS0yMS4wODY2LTI2LjY3NC00LjQyMzIyLTEwLjcxMTU1LTcuMjkwODItMjAuMDE3MzktMTkuMDAyMTItMjQuNjgwNDlDODk2Ljk2MjEyLDIyMC4yOTg3NSw4ODMuMjAzNzEsMjE2LjczMjM5LDg2OS4zOTM2MywyMTguNjExODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuNSAtNDMuODk2OTUpIiBmaWxsPSIjZmY2NTg0Ii8+PC9zdmc+" className="img-fluid" alt="Download Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="para">
            <p>Web Developer with expertise in React.js, HTML, and CSS. Currently learning Backend for MERN Stack Developer.</p>
            <p>I am a passionate programmer and a learner, born and brought up in India. Currently, I am enrolled in AlmaBetter - Full Stack Web Development Program "IIT Guwahati Certification".</p>
            <p>Along with that, I love learning about new technologies, what problems they are solving, and how I can use them to build better and scalable products.</p>
            <div className="button">
              <button className="btn btn-primary" onClick={scrollToContact}>Let's Talk</button>
              <button className="btn btn-success"><a className="btn btn-success" href={'https://drive.google.com/file/d/12sBuZW-xvckfnqFB1DtbQm4ac27k3t9G/view?usp=sharing'} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"#FFFFFF"}}>My Resume</a></button>
              <button className="btn btn-danger"><a href="https://github.com/Nitish814112" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"#FFFFFF"}}>GitHub</a></button>
              <button className="btn btn-info"><a href="https://www.linkedin.com/in/nitish814112" target="_blank" style={{textDecoration:"none",color:"#FFFFFF"}}>LinkedIn</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
