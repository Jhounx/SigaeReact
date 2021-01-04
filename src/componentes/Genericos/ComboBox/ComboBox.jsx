import React, {forwardRef} from "react"
import TextField from "@material-ui/core/TextField";
import {CustumAutocomplete, CustumMultipleAutocomplete} from "./ComboBox.styles"

export const ComboBox = React.memo(forwardRef(({ values, grupos, placeholder, erro, ...props }, ref) => {
    var data = []
    if (values != undefined) data = createValues(values)
    if (grupos != undefined) data = CreateGroup(grupos)
    return (
        <CustumAutocomplete
            options={data}
            getOptionLabel={(option) => option.valor}
            groupBy={(option) => grupos != undefined ? option.grupo : null}
            noOptionsText={"Sem opção"}
            selectOnFocus={false}
            erro={erro}
            ref={ref}
            renderInput={(params) => <TextField {...params} onChange={() => {console.log("teste")}} variant="outlined" placeholder={placeholder}/>}
            {...props}
        />
    )
}))

export const MultipleComboBox = React.memo(forwardRef(({ grupos, placeholder, erro, ...props }, ref) => {
    var data = CreateGroup(grupos)
    return (
        <CustumMultipleAutocomplete
            options={data}
            getOptionLabel={(option) => option.valor}
            groupBy={(option) => option.grupo}
            noOptionsText={"Sem opção"}
            selectOnFocus={false}
            multiple
            erro={erro}
            renderInput={(params) => <TextField {...params} variant="outlined" placeholder={placeholder} ref={ref}/>}
            {...props}
        />
    )
}))

const createValues = (options) => {
    var array = []
    for (var index in options) {
        var entrada = options[index]
        array.push({valor: entrada})
    }
    return array;
}

const CreateGroup = (options) => {
    var array = []
    Object.keys(options).forEach(function (key) {
        var obj = options[key]
        for (var index in obj) {
            var entrada = obj[index]
            array.push({valor: entrada, grupo: key})
        }
    })
    return array;
}