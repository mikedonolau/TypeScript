// @target:es6
declare function dec<T>(target: T): T;

@dec
export default class C {
}