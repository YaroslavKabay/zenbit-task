import {IForm} from '../interfaces'
import {urls} from '../constants'
import {AxiosRes, axiosService} from '../services'


export const formService = {
    getAll:(): AxiosRes<IForm[]> => axiosService.get(urls.form),
    create:(form: IForm):AxiosRes<IForm> => axiosService.post(urls.form, form),
}