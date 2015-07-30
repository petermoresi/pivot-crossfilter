# pivot for crossfilter

This is a simple pivot function for crossfilter.

The function returns the counts for a given row and column; and the product of the row/col.

    data = [{ product: "A", store: "B"},
	        {product: "B", store: "A"},
    	    {product: "C", store: "B"}]

	fact = crossfilter(data);
			
	pivot( facts, "product", "store")`

This code will yield the result:

	{
		"product": {
			"A": 1,
			"B": 1,
			"C": 1
		},
		"store": {
			"A": 1,
			"B": 2
		},
		"product|store": {
			"A|B": 1,
			"B|A": 1,
			"C|B": 1
		}
	}`
