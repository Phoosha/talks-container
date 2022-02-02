1. Read the simple [`Dockerfile`](./Dockerfile)
2. Build an image using this Dockerfile and the application in `../pickyapp`
   ~~~sh
   docker build -t pickyapp:02_dockerfile ../pickyapp
   ~~~
3. Start a container using the previously built image
   ~~~sh
   docker run --rm -p 8080:8080 pickyapp:02_dockerfile
   ~~~
4. Observe how the application does _not_ crash if you open http://localhost:8080
5. Stop the container using _Ctrl+C_
6. Take a loot at the inside of the container image by starting a shell
   ~~~sh
   docker run --rm -p 8080:8080 --entrypoint /bin/sh -it pickyapp:02_dockerfile
   ~~~
7. Run any Linux command, e.g. to view the current directory
   ~~~sh
   ls -la
   ~~~
8. Exit the shell stopping the container using _Ctrl+D_
9. Take a look at what an image consists of from Docker's point of view
   ~~~sh
   docker inspect pickyapp:02_dockerfile
   ~~~
