# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- GitLab CI to not use env variable but cli arguments for gitlab automation scripts.

## [1.0.1] - 30-07-19
## Added
- Path alias use `~` to point to `src` folder instead of `../...` etc.

### Changed
- Project structure to match default by Firebase core project files exist in `functions`.
- README so badges all line up (in a single line).
- Using NPM instead of yarn.
- GitLab CI to match new project structure.

## [1.0.0] - 27-07-19
### Added
- Encode and decode using LSB.
- Express web server.
- Token based authentication.
