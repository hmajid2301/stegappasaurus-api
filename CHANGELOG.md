# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2019-09-09
### Added
- Path alias use `~` to point to `src` folder instead of `../...` etc.
- Logging on requests.
- Version to `package.json`.

### Changed
- Date format in changelog.
- Project structure to match default by Firebase core project files exist in `functions`.
- README so badges all line up (in a single line).
- Using NPM instead of yarn.
- GitLab CI to match new project structure.
- GitLab CI to not use env variable but cli arguments for gitlab automation scripts.

### Fixed
- GitLab CI jobs related to Firebase, failing due to incorrect arguments.

## [1.0.0] - 2019-07-27
### Added
- Encode and decode using LSB.
- Express web server.
- Token based authentication.
