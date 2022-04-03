import moment from 'moment';
export function formatDate(inputDate:string):string{
    return moment(inputDate).format('LLL')
}