import ky from 'ky';

const infoUrl = "/analysis/spotify-";
const analysisUrl = "/analysis/ai-";


class Ear {
    meta = {}
    data = {}
    analysis = {}

    constructor(name, id) {
        this.getSongDataFromApis(name)
    }

    getSongDataFromApis = (name) => {
        (async () => {
            let songInfo = await ky.get(infoUrl + name + infoUrlPostfix, {timeout: 70000}).json()
            let songAnalysis = await ky.get(analysisUrl + name + analysisUrlPostfix, {timeout: 70000}).json();

        })();
    }
}

export default Ear;
