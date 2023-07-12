// export const deepEquals = (obj1:any, obj2:any) => {
//   if (obj1 !== undefined && obj2 !== undefined) {
//     if (obj1 === obj2) {
//       return true;
//     } else if (
//       typeof obj1 == 'object' &&
//       obj1 != null &&
//       typeof obj2 == 'object' &&
//       obj2 != null
//     ) {
//       if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

//       for (var prop in obj1) {
//         if (obj2.hasOwnProperty(prop)) {
//           if (!deepEquals(obj1[prop], obj2[prop])) return false;
//         } else return false;
//       }

//       return true;
//     } else return false;
//   } else return false;
// };

export const deepEquals = (obj1: any, obj2: any): boolean =>
  obj1 === obj2 ||
  (Array.isArray(obj1)
    ? Array.isArray(obj2) &&
      obj1.length === obj2.length &&
      obj1.every((item: any, index: number) => deepEquals(item, obj2[index]))
    : obj1 instanceof Date
    ? obj2 instanceof Date && obj1.getTime() === obj2.getTime()
    : obj1 && typeof obj1 === 'object'
    ? obj2 &&
      typeof obj2 === 'object' &&
      Object.getOwnPropertyNames(obj1).length === Object.getOwnPropertyNames(obj2).length &&
      Object.getOwnPropertyNames(obj1).every((prop) => deepEquals(obj1[prop], obj2[prop]))
    : obj1 === obj2);
