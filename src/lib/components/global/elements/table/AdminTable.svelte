<script>
    import {readable} from 'svelte/store';
    import {createRender, createTable, Render, Subscribe} from 'svelte-headless-table';
    import {addPagination, addSelectedRows, addSortBy, addTableFilter} from 'svelte-headless-table/plugins';
    import Action from './Action.svelte';
    import Selection from './Selection.svelte';


    let filterHour;
    $:{
        if(filterHour){
            $filterValue = "pending"
        }else{
            $filterValue = ""
        }
    }
    let rawData = [
        {id: 415631, status: "approved", firstName: "marc", lastName: "hyeler", age: 17},
        {id: 415631, status: "pending", firstName: "marc", lastName: "hyeler", age: 17},
        {id: 415631, status: "approved", firstName: "marc", lastName: "hyeler", age: 17},
        {id: 415631, status: "pending", firstName: "marc", lastName: "hyeler", age: 17},
        {id: 415631, status: "rejected", firstName: "marc", lastName: "hyeler", age: 17}

    ]
    const data = readable(rawData);


    const table = createTable(data, {
        page: addPagination(),
        tableFilter: addTableFilter(),
        sort: addSortBy(),
        select: addSelectedRows(),
    });


    const columns = table.createColumns([
        table.column({
            id: 'selected',
            header: (_, {pluginStates}) => {
                const {allPageRowsSelected} = pluginStates.select;
                return createRender(Selection, {
                    isSelected: allPageRowsSelected,
                });
            },
            cell: ({row}, {pluginStates}) => {
                const {isSomeSubRowsSelected, isSelected} = pluginStates.select.getRowState(row);
                return createRender(Selection, {
                    isSelected,
                    isSomeSubRowsSelected,
                });
            },
            plugins: {
                sort: {
                    disable: true,
                },
            },
        }),

        table.column({
            header: "Student ID",
            accessor: "id",
            plugins: {sort: {disable: false}, tableFilter: {exclude: false}},
        }),

        table.column({
            header: "Status",
            accessor: "status",
            plugins: {sort: {disable: false}, tableFilter: {exclude: false}},
        }),
        table.column({
            header: "First Name",
            accessor: "firstName",
            plugins: {sort: {disable: false}, tableFilter: {exclude: false}},
        }),
        table.column({
            header: "Last Name",
            accessor: "lastName",
            plugins: {sort: {disable: false}, tableFilter: {exclude: true}},
        }),
        table.column({
            header: "Age",
            accessor: "age",
            plugins: {sort: {disable: false}, tableFilter: {exclude: true}},
        }),
        table.column({
            header: "",
            accessor: ({id}) => id,
            cell: (item) => {
                return createRender(Action, {id: item.value});
            },
            plugins: {
                sort: {
                    disable: true,
                },
                tableFilter: {exclude: true}
            },
        }),
    ]);

    const {headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates} = table.createViewModel(columns);
    const {pageIndex, pageCount, pageSize, hasNextPage, hasPreviousPage} = pluginStates.page;

    const {filterValue} = pluginStates.tableFilter;

    const {sortKeys} = pluginStates.sort;

    const {selectedDataIds} = pluginStates.select;
</script>

<pre>{JSON.stringify(
    {
        $pageIndex: $pageIndex,
        $pageCount: $pageCount,
        $pageSize: $pageSize,
    },
    null,
    2,
)}</pre>

<pre>{JSON.stringify(
    {
        $selectedDataIds: $selectedDataIds,
    },
    null,
    2,
)}</pre>

<input bind:value={$filterValue} placeholder="Search rows..." type="text"/>

<div>
    <button
            disabled={!$hasPreviousPage}
            on:click={() => $pageIndex--}>Previous page
    </button
    >
    {$pageIndex + 1} out of {$pageCount}
    <button
            disabled={!$hasNextPage}
            on:click={() => $pageIndex++}>Next page
    </button
    >
</div>
<label for="page-size">Page size</label>
<input bind:value={$pageSize} id="page-size" min={1} type="number"/>

<input type="checkbox" bind:checked={filterHour}/>

<div class="table-cont">
    <table {...$tableAttrs}>
        <thead>
        {#each $headerRows as headerRow (headerRow.id)}
            <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
                <tr {...rowAttrs}>
                    {#each headerRow.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                            <th {...attrs} on:click={props.sort.toggle}>
                                <Render of={cell.render()}/>
                                {#if props.sort.order === 'asc'}
                                    ⬇️
                                {:else if props.sort.order === 'desc'}
                                    ⬆️
                                {/if}
                            </th>
                        </Subscribe>
                    {/each}
                </tr>
            </Subscribe>
        {/each}
        </thead>
        <tbody {...$tableBodyAttrs}>
        {#each $pageRows as row (row.id)}
            <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
                <tr {...rowAttrs} class:matches={$selectedDataIds[row.id] && "selected"}>
                    {#each row.cells as cell (cell.id)}
                        <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                            <td {...attrs} class:matches={props.tableFilter.matches}>
                                <Render of={cell.render()}/>
                            </td>
                        </Subscribe>
                    {/each}
                </tr>
            </Subscribe>
        {/each}
        </tbody>
    </table>
</div>

<style>
    .table-cont{
        display: flex;
        width: 800px;
    }
    table {
        border-spacing: 0;
        border-top: 1px solid black;
        border-left: 1px solid black;
    }

    th, td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        padding: 0.5rem;
    }

    .matches {
        background: rgba(46, 196, 182, 0.2);
    }
</style>
