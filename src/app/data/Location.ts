import BasicInfo from './BasicInfo';

export default interface Location extends BasicInfo {
    location?: Location; // optional hierarchy
}