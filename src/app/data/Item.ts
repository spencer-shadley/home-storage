import BasicInfo from './BasicInfo';

export default interface Item extends BasicInfo {
    container: string;
    tags: string[];
}