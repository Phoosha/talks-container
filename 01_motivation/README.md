1. Simulate a bad runtime environment (for the sake of simplicity using Docker
   but in practice this could be some random linux installation)
   ~~~sh
   docker run --rm -it \
       -v $(pwd)/..:/home/node/container -p 8080:8080 \
       --entrypoint /bin/sh \
       -w /home/node/container/pickyapp \
       node:16.13.2-alpine3.14
   ~~~
2. Start the application in this bad runtime environment
   ~~~sh
   yarn
   yarn dev
   ~~~
3. Connect to the application on http://localhost:8080
4. Observe how the application crashes due to a segmentation fault
