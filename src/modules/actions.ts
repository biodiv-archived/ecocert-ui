import * as authDuckActions from "./ducks/auth.duck";
import * as batchingDuckActions from "./ducks/batching.duck";
import * as collectDuckActions from "./ducks/collect.duck";
import * as counterDuckActions from "./ducks/counter.duck";
import * as farmerDuckActions from "./ducks/farmer.duck";

export default {
  ...authDuckActions,
  ...batchingDuckActions,
  ...collectDuckActions,
  ...counterDuckActions,
  ...farmerDuckActions
};
