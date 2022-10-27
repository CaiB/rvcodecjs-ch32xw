# rvcodec.js

## Introduction

**rvcodec.js** is a RISC-V instruction encoder/decoder available at
<https://luplab.gitlab.io/rvcodecjs/>.

**rvcodec.js** conveniently shows how each token of the assembly instruction is
encoded as part of the binary representation.

## Contributing

### Run locally

- Clone this repo: `$ git clone git@gitlab.com:luplab/rvcodecjs.git`
- Install dependencies: `$ npm install`
- Make changes
    * The encoding/decoding logic is in directory `core`
    * The web user interface is in directory `web-ui`
- Run testsuite to avoid any regressions: `$ npm test`
- Open website locally to test UI: `$ npm run open`

### Roadmap

If you'd like to contribute, here are the main features we'd like to add:

- [x] Support for RV32I instruction set
- [x] Support for RV64I instruction set
- [ ] Support for rest of GC extensions
    - [x] Zifencei instruction set
    - [X] Zicsr instruction set
    - [ ] M (multiplication/division) instruction set
    - [ ] A (atomic) instruction set
    - [ ] F (single-precision floating point) instruction set
    - [ ] D (double-precision floating point) instruction set
    - [ ] C (compressed) instruction set

## Credit and license

**rvcodec.js** is developed by the [LupLab](https://luplab.cs.ucdavis.edu/) at
UC Davis. Contributors include or have included:

- Hikari Nicole Sakai *(backend's first functional version)*
- Abhiroop Sohal *(frontend's first function version)*
- Joël Porquet-Lupine

**rvcodec.js** is released under the [GNU Affero General Public License
v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).
