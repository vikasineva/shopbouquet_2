import { makeStyles } from "../../../hooks/makeStyles";

export const styles = makeStyles({
    catalogFrame: {
        width: "277px",
        height: "446px",
        display: "flex",
        position: "relative",
        alignItems: "flex-start",
        flexShrink: 0,
        borderRadius: "4px",
        backgroundColor: "#FFF3F6",
    },
    catalogPrice: {
        top: " 391px",
        left: "16px",
        color: "rgba(17, 17, 17, 1)",
        position: "absolute",
        fontSize: "18px",
        fontStyle: "normal",
        textAlign: "left",
        fontFamily: "Open Sans",
        fontWeight: "700",
        lineHeight: "normal",
        fontStretch: "normal",
    },
    catalogTitle: {
        top: "323px",
        left: "0px",
        color: "rgba(17, 17, 17, 1)",
        right: "0px",
        margin: "auto",
        position: "absolute",
        fontSize: "18px",
        alignSelf: "flex-end",
        fontStyle: "normal",
        textAlign: "center",
        fontFamily: "Open Sans",
        fontWeight: "600px",
        lineHeight: "normal",
        fontStretch: "normal",
    }
});