const element = selector => document.querySelector(selector)
const elements = selector => document.querySelectorAll(selector)

const create = ( tag, { text = '', ...attributes } ) =>
{
    const elem = document.createElement( tag )
    if ( text )
    {
        const textNode = document.createTextNode( text )
        elem.appendChild( textNode )
    }
    if ( attributes )
    {
        for ( const [key, value] of [...Object.entries( attributes )] )
        {
            elem.setAttribute( key, value )
        }
    }
    return elem
}

export {element, elements, create}