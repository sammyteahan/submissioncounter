#!/usr/bin/env bash

# Creates an .env from existing env files for use with react-native-config
# based on branch
if [ "$APPCENTER_BRANCH" == "master" ]; then
  cp .env.staging .env
if [ "$APPCENTER_BRANCH" == "production" ]; then
  cp .env.production .env
else
  cp .env.staging .env
fi

printf "\n***************************\n"
printf "\n.env created with contents:\n"
printf "\n***************************\n"
cat .env
