// import ky from 'ky';
import aiJson from '../resources/analysis/ai-the-veldt.json'
import spotJson from '../resources/analysis/spotify-the-veldt.json'

// const infoUrl = "/analysis/spotify-"
// const analysisUrl = "/analysis/ai-"
// const urlPostfix = ".json"



class Ear {
    meta = {}
    data = {}
    analysis = {}

    constructor(name, id) {
        this.name = name
        this.id = id
        this.getSongDataFromApis(name)
    }

    getSongDataFromApis = (name) => {
        (async () => {
            const externalInfo = spotJson; // await ky.get(infoUrl + name + urlPostfix, {timeout: 70000}).json()
            const externalAnalysis = aiJson; //await ky.get(analysisUrl + name + urlPostfix, {timeout: 70000}).json();

            if(externalInfo) {
                this.meta = externalInfo.track
                this.data = processInfo(externalInfo)
            }

            if(externalAnalysis) {
                console.log(externalAnalysis, "awdawd")
                this.analysis = processAnalysis(externalAnalysis.analysis)
            }

            console.log(this)
        })();
    }
}

const processInfo = (data) => {
    return {
        bars: data.bars,
        beats: data.beats,
        tatums: data.tatums,
        sections: data.sections,
        segments: data.segments,
    }
}

const processAnalysis = (data) => {
    return {
        global: {
            acousticness: data.acousticness,
            danceability: data.danceability,
            energy: data.energy,
            instrumentalness: data.instrumentalness,
            valence: data.valence,
        },
        tags: data.tags,
        smart: data.smart_tags.overall_predictions
    }
}

export default Ear;
