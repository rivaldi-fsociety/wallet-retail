#!/bin/bash

set -e

echo "Installing Dependencies..."
npm install

echo "Building Application..."
npm run build

echo "Starting Application..."
npm start