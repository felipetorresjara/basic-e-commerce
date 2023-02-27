import react from "react";


const retailNames = {
    'eneba': 'Eneba',
    'steam': 'Steam',
    'epicgames': 'Epic Games',
    'playstation': 'Play Station Store'
}

export default function RetailFilter(props){
    const { router } = props
    const { retails } = router.query
    const retailList = retails !== undefined && retails !== '' ? retails.split(',') : Object.keys(retailNames)
    const HandleRetails = (retail) => {
        let tempRetails = retailList

        const index = tempRetails.indexOf(retail)
        if(index > -1){
            tempRetails.splice(index, 1)
        }
        else{
            tempRetails.push(retail)
        }
        router.query.retails = tempRetails.toString()
        router.push({pathname: router.pathname, query: router.query})
    }

    return(
        <div className="pl-5">
            <p className="text-white text-lg font-semibold">
                Plataformas
            </p>
            <div className="max-h-52 overflow-y-auto">
                {Object.keys(retailNames).map((retail)=> 
                    <div
                        key={retail}
                        className="flex items-center p-1 rounded betterhover:hover:bg-hoverbg betterhover:cursor-pointer"
                        onClick={()=>HandleRetails(retail)}
                    >
                        <input id="default-checkbox" type="checkbox" onChange={()=>{}} checked={retailList.includes(retail)} value="" className="w-5 h-5 bg-background rounded border border-primary focus:ring-0 accent-primary text-xs"/>
                        <p className="ml-2 text-base font-medium text-white">{retailNames[retail]}</p>
                    </div>
                )}
            </div>
        </div>
    )
}