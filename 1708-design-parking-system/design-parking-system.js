/**
* @param {number} big
* @param {number} medium
* @param {number} small
*/
class ParkingSystem{
  constructor(big, medium, small){
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  /**
  * @param {number} carType
  * @return {boolean}
  */
  addCar(carType){
    let result = false;

    switch (carType) {
      case 1:
        if (this.big > 0){
          this.big--;
          result = true;
        }
        break;

      case 2:
        if (this.medium > 0){
          this.medium--;
          result = true;
        }
        break;

      case 3:
        if (this.small > 0){
          this.small--;
          result = true;
        }
        break;
    }

    return result;
  }
}
