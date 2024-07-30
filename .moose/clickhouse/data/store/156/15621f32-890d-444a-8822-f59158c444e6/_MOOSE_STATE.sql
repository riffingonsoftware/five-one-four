ATTACH TABLE _ UUID '4f5e8d95-9267-4ec7-ae8e-700091e14891'
(
    `timestamp` DateTime('UTC') DEFAULT now(),
    `state` String
)
ENGINE = MergeTree
PRIMARY KEY timestamp
ORDER BY timestamp
SETTINGS index_granularity = 8192
