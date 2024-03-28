import { Grid } from "@material-ui/core";

function CenterGrid(props) {
    return (
        <Grid
            container
            item
            xs={12}
            direction="row"
            justifyContent="center">
            <Grid container item xs={6}>
                {props.children}
            </Grid>
        </Grid>
    )
}

export { CenterGrid };