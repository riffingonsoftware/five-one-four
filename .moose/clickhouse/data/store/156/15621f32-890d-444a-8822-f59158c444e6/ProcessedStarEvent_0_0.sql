ATTACH TABLE _ UUID '6f149372-1011-4b2d-bc73-000243881d29'
(
    `starred_at` DateTime('UTC'),
    `username` String,
    `languages` Array(Nested(language String, bytes Float64))
)
ENGINE = MergeTree
PRIMARY KEY starred_at
ORDER BY starred_at
SETTINGS index_granularity = 8192
