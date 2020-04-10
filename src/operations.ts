import { Operation, operation } from "userscripter/lib/operations";
import { addStatisticsButton } from './operations/addStatisticsButton';

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: "add bot helper button",
    condition: () => true,
    action: addStatisticsButton,
  }),
];

export default OPERATIONS;
