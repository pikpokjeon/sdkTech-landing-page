import  {element, elements, create} from './utils/create.js'

const main = async () =>
{
    element('[id="section-1"]').append(
        create('div',{text:'section-1'})
    )
    element('[id="section-2"').append(
        create('div',{text:'section-2'})
    )
    element('[id="section-3"').append(
        create('div',{text:'section-3'})
    )
    element('[id="section-4"').append(
        create('div',{text:'section-4'})
    )
}

export {main}