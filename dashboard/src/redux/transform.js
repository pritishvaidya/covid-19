import { has, when, identity } from "ramda";
import Immutable from "seamless-immutable";

const isImmutable = has("asMutable");

const convertToJs = state => state.asMutable({ deep: true });

const fromImmutable = when(isImmutable, convertToJs);

const toImmutable = raw => Immutable(raw);

export default {
  out: state => {
    state.mergeDeep = identity;
    return toImmutable(state);
  },
  in: raw => {
    return fromImmutable(raw);
  }
};
