import { BuildingColor } from "../global";

export default {
  images: {
    logo: require('./images/global/logo.svg'),
    kfsLogo: require('./images/global/kfs.svg'),
    kfiesLogo: require('./images/global/kfies.svg'),

    cssLogo: require('./images/technos/css.png').default,
    htmlLogo: require('./images/technos/html.png').default,
    javascriptLogo: require('./images/technos/javascript.png').default,
    nodeLogo: require('./images/technos/node.png').default,
    reactLogo: require('./images/technos/react.png').default,
    sassLogo: require('./images/technos/sass.png').default,
    socketioLogo: require('./images/technos/socketio.png').default,
    typescriptLogo: require('./images/technos/typescript.png').default,

    brown: {
      way: require('./images/buildings/way.svg'),
      townhall: require('./images/buildings/townhall.svg'),
      house: require('./images/buildings/houseBrown.svg'),
      market: require('./images/buildings/market.svg'),
      hall: require('./images/buildings/hall.svg'),
      outpost: require('./images/buildings/outpostBrown.svg'),
    },
    pink: {
      way: require('./images/buildings/way.svg'),
      townhall: require('./images/buildings/townhall.svg'),
      house: require('./images/buildings/housePink.svg'),
      market: require('./images/buildings/market.svg'),
      hall: require('./images/buildings/hall.svg'),
      outpost: require('./images/buildings/outpostPink.svg'),
    },
    blue: {
      way: require('./images/buildings/way.svg'),
      townhall: require('./images/buildings/townhall.svg'),
      house: require('./images/buildings/houseBlue.svg'),
      market: require('./images/buildings/market.svg'),
      hall: require('./images/buildings/hall.svg'),
      outpost: require('./images/buildings/outpostBlue.svg'),
    },
    yellow: {
      way: require('./images/buildings/way.svg'),
      townhall: require('./images/buildings/townhall.svg'),
      house: require('./images/buildings/houseYellow.svg'),
      market: require('./images/buildings/market.svg'),
      hall: require('./images/buildings/hall.svg'),
      outpost: require('./images/buildings/outpostYellow.svg'),
    },
    green: {
      way: require('./images/buildings/way.svg'),
      townhall: require('./images/buildings/townhall.svg'),
      house: require('./images/buildings/houseGreen.svg'),
      market: require('./images/buildings/market.svg'),
      hall: require('./images/buildings/hall.svg'),
      outpost: require('./images/buildings/outpostGreen.svg'),
    },
  }
} as const
