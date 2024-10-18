Camera Integration Code Using WebRTC API:
This  java-script code demonstrates how to integrate a camera feed into a web-based application using the WebRTC API . It allows users to access their camera, switch between different screens, and start or stop the camera stream as needed.
The main part of this java-script code revolves around getUserMedia(), a function from the WebRTC API that enables websites to access the device’s camera or microphone. This function ensures that the user’s consent is obtained before the camera feed is activated.

How the Code Works:
The program has two key screens: a start screen and a camera screen. Initially, the user sees the start screen. Upon clicking the "Get Started" button, the camera screen is displayed, and the camera feed starts automatically.

*Switching Screens:
When the user starts the app, the start screen becomes hidden, and the camera screen is shown. This transition is handled by the startApp() function, which calls another function, startCamera(), to begin the camera feed. Conversely, when the "Go Back" button is pressed, the app returns to the start screen and stops the camera using the stopCamera() function.

*Starting the Camera:
The startCamera() function utilizes navigator.mediaDevices.getUserMedia() to request access to the camera. If the user grants permission, the video feed from the camera is attached to the <video> element on the page. If access is denied, the error is logged in the console.

*Stopping the Camera:
The stopCamera() function ensures that the camera feed is properly terminated. It stops all the active video tracks from the MediaStream object and clears the video feed by setting the srcObject of the <video> element to null.


