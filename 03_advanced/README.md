1. Read the revised [`../pickyapp/Dockerfile`](../pickyapp/Dockerfile)
2. Build an image using this Dockerfile and the application in `../pickyapp`
   ~~~sh
   docker build -f ../pickyapp/Dockerfile -t pickyapp:03_advanced ../pickyapp
   ~~~
3. Start a container using the previously built image
   ~~~sh
   docker run --rm -p 8080:8080 pickyapp:03_advanced
   ~~~
4. Observe how the application does _not_ crash if you open http://localhost:8080
5. Stop the container using _Ctrl+C_
6. Take a look at what an image consists of from Docker's point of view
   ~~~sh
   docker inspect pickyapp:03_advanced
   ~~~
7. Change the image the application serves
   ~~~sh
   docker run --rm -p 8080:8080 -v $(pwd)/data:/srv/data pickyapp:03_advanced -f /srv/data/fish.jpg
   ~~~
4. Observe how the application shows the new image if you open http://localhost:8080
