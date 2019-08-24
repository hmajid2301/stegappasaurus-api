<a href="https://gitlab.com/stegappasaurus/stegappasaurus-app">
    <img src="docs/images/logo-dark.png" alt="Stegappasaurus Logo" title="Stegappasaurus" align="right" height="60" />
</a>

# Stegappasaurus API

[![pipeline status](https://gitlab.com/stegappasaurus/stegappasaurus-api/badges/master/pipeline.svg)](https://gitlab.com/stegappasaurus/stegappasaurus-api/commits/master)
[![coverage report](https://gitlab.com/stegappasaurus/stegappasaurus-api/badges/master/coverage.svg)](https://gitlab.com/stegappasaurus/stegappasaurus-api/commits/master)

This project contains the Firebase Cloud Functions API for the React Native mobile application. 
This project contains the code to encode and decode images, using steganography algorithms.

## Algorithms

Currently support the following steganography algorithms;

- LSB: Least Significant Bit

# Getting Started

## Installation

To setup firebase

```bash
git clone https://github.com/stegappasaurus/stegappasaurus-api.git
yarn
vim .runtimeconfig.json
yarn run firebase-emulator
```

### Example .runtimeconfig.json

An example configuration file should look like

```json
{
    "env": {
        "production": "false"
    }
}
```

# Other

## Credit

### Images

- Purchased stegosaurus dinosaur logo from [iconfinder](https://www.iconfinder.com/icons/380124/animal_big_experience_dino_paleontology_reptile_stegosaurus_zababa_icon#size=512)