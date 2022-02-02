#!/bin/sh

docker run --rm -it \
    -v $(pwd)/..:/home/node/container -p 8080 \
    --entrypoint /bin/sh \
    -w /home/node/container/pickyapp \
    node:14.0.0-alpine3.11
