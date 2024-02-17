import { useEIAData } from "../hooks/useEIAData";

export function DataTable() {

    const { loading } = useEIAData("TOTAL.TEICBUS.A");

    return (
        <>
        <h3>INSERT TABLE HERE {JSON.stringify(loading)}</h3></>
    )
}