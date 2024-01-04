<!-- +page.svelte -->
<script lang="ts">
	import type { Meta } from '$lib/typesBooking';
	import {
		getCoreRowModel,
		type ColumnDef,
		type TableOptions,
		createSvelteTable,
		flexRender,
		renderComponent
	} from '@tanstack/svelte-table';
	import { writable } from 'svelte/store';
	import Editbtn from './editbtn.svelte';

	export let data: {
		data: Meta[];
		pagination: { total: number; pageSize: number; pageNumber: number };
	};
	const { data: profiles, booking, pagination } = data;
	console.log(data);
	const defaultColumns: ColumnDef<Meta>[] = [
		{
			accessorKey: 'id',
			header: 'ID',
			cell: (info) => info.getValue()
		},
		{
			accessorKey: 'profiles.full_name',
			header: 'full name',
			cell: (info) => info.getValue()
		},
		{
			accessorKey: 'profiles.email',
			header: 'Email',
			cell: (info) => info.getValue()
		},
		{
			accessorKey: 'profiles.phone',
			header: 'phone number',
			cell: (info) => info.getValue()
		},
		{
			accessorKey: 'property.title',
			header: 'title',
			cell: (info) => info.getValue()
		},
		{
			accessorKey: 'created_at',
			header: 'created at',
			cell: (info) => new Date(info.getValue() as string).toLocaleString()
		},
		{
			header: 'Action',
			cell: (info) => renderComponent(Editbtn, { booking: info.row.original })
		}
	];

	const options = writable<TableOptions<Meta>>({
		data: profiles,
		columns: defaultColumns,
		getCoreRowModel: getCoreRowModel(),
		paginateExpandedRows: true
	});

	const table = createSvelteTable(options);
</script>

<div class="relative m-4 overflow-x-auto rounded">
	<table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
		<thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
			{#each $table.getHeaderGroups() as headerGroup}
				<tr>
					{#each headerGroup.headers as header}
						<th colSpan={header.colSpan} class="px-6 py-3">
							{#if !header.isPlaceholder}
								<svelte:component
									this={flexRender(header.column.columnDef.header, header.getContext())}
								/>
							{/if}
						</th>
					{/each}
				</tr>
			{/each}
		</thead>
		<tbody>
			{#each $table.getRowModel().rows as row}
				<tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
					{#each row.getVisibleCells() as cell}
						<td class="whitespace-nowrap px-6 py-3 font-medium text-gray-900 dark:text-white">
							<svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	<!-- <Pagination.Root
		count={pagination?.total}
		perPage={pagination?.pageSize}
		let:pages
		let:currentPage
	> -->
		<!-- <Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton />
			</Pagination.Item>
			{#each pages as page (page.key)}
				{#if page.type === 'ellipsis'}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				{:else}
					<Pagination.Item>
						<Pagination.Link {page} isActive={currentPage == page.value}>
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}
			<Pagination.Item>
				<Pagination.NextButton />
			</Pagination.Item>
		</Pagination.Content>
	</Pagination.Root> -->
</div>
