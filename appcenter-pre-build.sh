#!/usr/bin/env bash

if [ -z "$SOME_API_KEY" ]; then
  echo "Error: SOME_API_KEY is not set."
  exit 1
fi

echo "SOME_API_KEY=$SOME_API_KEY" > .env