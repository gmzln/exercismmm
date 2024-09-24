const knightIsAwake = boolean;
const archerIsAwake = boolean;
const prisonerIsAwake = boolean;
const petDogIsPresent = boolean;



function canExecuteFastAttack(knightIsAwake){
    if (knightIsAwake === true) return false
};
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
    if (knightIsAwake === false && archerIsAwake === true && prisonerIsAwake === false) return true
};
function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
    if (archerIsAwake === false && prisonerIsAwake === true) return true
};
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
    if (knightIsAwake === false && archerIsAwake === false && prisonerIsAwake === false && petDogIsPresent === false){
        return true
    } else false
}