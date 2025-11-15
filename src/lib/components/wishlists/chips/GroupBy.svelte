<script lang="ts">
    import { getFormatter } from "$lib/i18n";
    import BaseChip from "./BaseChip.svelte";

    const t = getFormatter();
    const options: Option[] = [
        {
            value: "claimed",
            displayValue: $t("wishes.claimed")
        },
        {
            value: "suggested",
            displayValue: $t("wishes.added-by-group-by")
        }
    ];

    const label = $t("wishes.group-by");
    const defaultOption = options[0];
    const searchParam = "group";
    const prefix = "ion:file-tray-full";
</script>

<BaseChip {defaultOption} {label} {options} {prefix} {searchParam} />
