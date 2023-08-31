// const listenser = {};


// export default {
//     "$on": function (event, handler) {
//         listenser['event'] = new Set();
//         listenser.event.add(handler);
//     },
//     '$off': function (event, handler) {
//         listenser.event.delete(handler)
//     },
//     '$emit': function (event, ...data) {
//         for (item of listenser.event) {
//             item(data);
//         }
//     }
// }

import Vue from "vue";
export default new Vue();