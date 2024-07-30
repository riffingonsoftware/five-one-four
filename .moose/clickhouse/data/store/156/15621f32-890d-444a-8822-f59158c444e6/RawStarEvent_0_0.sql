ATTACH TABLE _ UUID 'ee4e2bd2-35f4-49fe-814a-56b6022bda44'
(
    `action` String,
    `organization` Nested(avatar_url String, description String, events_url String, hooks_url String, id Float64, issues_url String, login String, members_url String, node_id String, public_members_url String, repos_url String, url String),
    `repository` Nested(allow_forking Bool, archive_url String, archived Bool, assignees_url String, blobs_url String, branches_url String, clone_url String, collaborators_url String, comments_url String, commits_url String, compare_url String, contents_url String, contributors_url String, created_at String, default_branch String, deployments_url String, description String, disabled Bool, downloads_url String, events_url String, fork Bool, forks Float64, forks_count Float64, forks_url String, full_name String, git_commits_url String, git_refs_url String, git_tags_url String, git_url String, has_discussions Bool, has_downloads Bool, has_issues Bool, has_pages Bool, has_projects Bool, has_wiki Bool, homepage String, hooks_url String, html_url String, id Float64, is_template Bool, issue_comment_url String, issue_events_url String, issues_url String, keys_url String, labels_url String, language String, languages_url String, license Nested(key String, name String, node_id String, spdx_id String, url String), merges_url String, milestones_url String, mirror_url String, name String, node_id String, notifications_url String, open_issues Float64, open_issues_count Float64, owner Nested(avatar_url String, events_url String, followers_url String, following_url String, gists_url String, gravatar_id String, html_url String, id Float64, login String, node_id String, organizations_url String, received_events_url String, repos_url String, site_admin Bool, starred_url String, subscriptions_url String, type String, url String), private Bool, pulls_url String, pushed_at String, releases_url String, size Float64, ssh_url String, stargazers_count Float64, stargazers_url String, statuses_url String, subscribers_url String, subscription_url String, svn_url String, tags_url String, teams_url String, topics String, trees_url String, updated_at String, url String, visibility String, watchers Float64, watchers_count Float64, web_commit_signoff_required Bool),
    `sender` Nested(avatar_url String, events_url String, followers_url String, following_url String, gists_url String, gravatar_id String, html_url String, id Float64, login String, node_id String, organizations_url String, received_events_url String, repos_url String, site_admin Bool, starred_url String, subscriptions_url String, type String, url String),
    `starred_at` String
)
ENGINE = MergeTree
PRIMARY KEY action
ORDER BY action
SETTINGS index_granularity = 8192
