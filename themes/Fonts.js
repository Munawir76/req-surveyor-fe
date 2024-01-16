import { Colors } from "./index"

const type = {
  base: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
  emphasis: 'Montserrat-Italic'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  regularGreyTitle : {
    fontFamily: type.bold,
    fontSize: size.regular,
    color: Colors.steel,
  },
  mediumTitle: {
    fontFamily: type.bold,
    fontSize: size.medium
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  medium: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  SubTitle: {
    fontFamily: type.bold,
    fontSize: size.small
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  greyDescription: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: Colors.charcoal,
  },
  withBorderBottom : {
    borderBottomWidth: 1,
    borderBottomColor: Colors.cloud
  }
}

export default {
  type,
  size,
  style
}