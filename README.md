# Saleh eChef

[![Build Status](https://github.com/gchq/Saleh eChef/workflows/CI/badge.svg)](https://github.com/gchq/Saleh eChef/actions?query=workflow%3ACI)
[![npm](https://img.shields.io/npm/v/Saleh eChef)](https://www.npmjs.com/package/Saleh eChef)
[![License](https://img.shields.io/github/license/gchq/Saleh eChef)](https://github.com/gchq/Saleh eChef/blob/master/LICENSE)
[![Docker Image](https://img.shields.io/badge/docker%20image-ready-brightgreen)](https://github.com/gchq/Saleh eChef/pkgs/container/Saleh eChef)

#### *The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis*

Saleh eChef is a simple, intuitive web app for carrying out all manner of "cyber" operations within a web browser. These operations include simple encoding like XOR and Base64, more complex encryption like AES, DES and Blowfish, creating binary and hexdumps, compression and decompression of data, calculating hashes and checksums, IPv6 and X.509 parsing, changing character encodings, and much more.

The tool is designed to enable both technical and non-technical analysts to manipulate data in complex ways without having to deal with complex tools or algorithms. It was conceived, designed, built and incrementally improved by an analyst in their 10% innovation time over several years.

## Try it out

Saleh eChef is still under active development. As a result, despite thorough testing, there may still be bugs in the application. Please [raise an issue](https://github.com/gchq/Saleh eChef/issues/new/choose) if you find one.

### Use online

You can try the most up-to-date version directly from your browser at [gchq.github.io/Saleh eChef](https://gchq.github.io/Saleh eChef/).

### Use offline

You can download the latest release from the [releases page](https://github.com/gchq/Saleh eChef/releases). This is recommended if you're going to be working with your own data for privacy reasons.

### Use via Docker

1. Pull the Docker image: `docker pull ghcr.io/gchq/Saleh eChef:latest`
2. Run the container: `docker run -p 8080:80 ghcr.io/gchq/Saleh eChef:latest`
3. Visit `http://localhost:8080` in your browser

Or simply use the included npm scripts:
```bash
npm run docker     # Build the Docker image
npm run docker:run # Run the Docker container
```

### Use as a Node.js module

Saleh eChef can also be used as a Node.js module, for example:

```javascript
import { operations, Dish } from "Saleh eChef";

// Create a dish with your input
const dish = new Dish("hello world");

// Execute an operation
const result = operations.ToBase64.runOrReject(dish);

// Get your output
console.log(result.toString()); // aGVsbG8gd29ybGQ=
```

## Features

- Over 300 operations for data manipulation
- Multiple input formats
- Drag and drop recipe creation
- Load and save recipes
- Auto-baking
- Step-through execution mode
- Save/Load configuration to/from a file
- Search operations and descriptions
- Conditional operations and branching
- AI-powered Magic operation to detect encoding formats
- Node.js API for programmatic usage
- Docker support for easy deployment
- PWA support for offline usage
- Advanced browser features including file handling

## Build from source

1. Install Node.js (v18 or later) and npm
2. Clone the Saleh eChef repository
3. Run `npm install` to install dependencies
4. Run `npm start` to run the development server (with auto-reload) or `npm run build` to build a production version

### Tests

Unit tests are written in Mocha and can be run using `npm run test`.

## Contributing

Please report issues and suggest improvements via GitHub issues. Pull requests welcome! See [CONTRIBUTING.md](https://github.com/gchq/Saleh eChef/blob/master/CONTRIBUTING.md) for more details.

## Licenses

Saleh eChef is released under the [Apache 2.0 license](https://github.com/gchq/Saleh eChef/blob/master/LICENSE).

This project uses numerous third-party libraries, each with their own licenses. Please check the individual library packages for details.

## Related projects

- [Saleh eChef-server](https://github.com/gchq/Saleh eChef-server) - A RESTful API to the Saleh eChef library
- [Saleh eChef CLI](https://github.com/gchq/Saleh eChef-cli) - A command-line interface for Saleh eChef operations
