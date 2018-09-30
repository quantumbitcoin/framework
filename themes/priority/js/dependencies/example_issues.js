var priority_authors = {
    api: {
        href: 'https://github.com/blockstrap/framework/tree/master/docs/en/api/',
        name: 'Blockstrap API Team'
    },
    framework: {
        href: 'https://github.com/blockstrap/framework/tree/master/docs/en/framework/',
        name: 'Blockstrap Framework Team'
    },
    apps: {
        href: 'https://github.com/blockstrap/framework/tree/master/docs/en/applications/',
        name: 'Blockstrap App Team'
    }
}

var priority_issues = [
    {
        title: 'Issue 01: Private Key Importation',
        address: '1JC2uLjV3icmUF8csTv7CozCyTH9rjMwkD',
        slug: 'issue_01:_private_key_importation',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'Although we cannot actually import private keys, we can fake it by creating a new address internally and then using the supplied private key to transfer the funds to the newly generated address.'
    },
    {
        title: 'Issue 02: User-Defined Data Storage',
        address: '14e1ACEw9jU5LY39CCMRPJU4XKakWHL5aA',
        slug: 'issue_02:_user_defined_data_storage',
        author: { 
            href: priority_authors.api.href,
            name: priority_authors.api.name
        },
        details: 'We would like to be able to use the device salt generated by the Framework to allow additional information to be stored and retreaved via the Blockstrap API.'
    },
    {
        title: 'Issue 03: GitHub Integration for Prioritizer Theme',
        address: '1Edtg2tWFgVNecbNbbNpCXwbew9TYCYZEq',
        slug: 'issue_03:_github_integration_for_prioritizer_theme',
        author: { 
            href: priority_authors.apps.href,
            name: priority_authors.apps.name
        },
        details: 'Allowing this list of issues to be synchronised with GitHub Issues would be pretty cool?'
    },
    {
        title: 'Issue 04: QR Scanning',
        address: '1HeSL99cqLbuYdkje7BhcBnYwNoZPQ7vvf',
        slug: 'issue_04:_qr_scanning',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'The biggest problem with this to-date has been the browser support. Once it has improved allowing QR codes to be scanned will then be a relatively simple task. Current work around would invove taking picture of QR code then uploadng it.'
    },
    {
        title: 'Issue 05: Bitcoin 2.0 Currency Support',
        address: '14GEdpZU31vkDYdJFJiNBvZVQwKegf3maV',
        slug: 'issue_05:_bitcoin_2.0_currency_support',
        author: { 
            href: priority_authors.api.href,
            name: priority_authors.api.name
        },
        details: 'Adding support for chains that are not direct forks of Bitcoin or Litecoin is going to take some effort, but our current favourites include Ripple, Stellar and Ethereum.'
    },
    {
        title: 'Issue 06: Document Signer',
        address: '1B7Uc6QRZ1eaoqdkrXShNJciXjQQpBYSe8',
        slug: 'issue_06:_document_signer',
        author: { 
            href: priority_authors.apps.href,
            name: priority_authors.apps.name
        },
        details: 'Use the blockchain to sign and verify the proof of ownership for various documents and other file formats.'
    },
    {
        title: 'Issue 07: Better Block, TX and Address Pages',
        address: '1EUj77sTQp744GiDQ6v7kUP9mVQpVEh2Vg',
        slug: 'issue_07:_better_block,_tx_and_address_pages',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'This feature is currently available in the default wallet, but is limited in scope and is also only available for accounts that are stored within localStorage. Ultimately, this page should be functionalized for live viewing of any information available at Blockchains.io.'
    },
    {
        title: 'Issue 08: Blockchain Analytics',
        address: '1BR8ARUnUeAtSHykgE19yTn7Cn55hrx6jy',
        slug: 'issue_08:_blockchain_analytics',
        author: { 
            href: priority_authors.api.href,
            name: priority_authors.api.name
        },
        details: 'In order to provide a fully-encompassing platform for application development, we are also planning to eventually introduce API-driven analytical features such as ranges, filters and other advanced relational queries.'
    },
    {
        title: 'Issue 09: Decentralized Anonymous Authentication',
        address: '1PtfTv8zef3BKjPeSoQ7WbyAWgGLRMiNzs',
        slug: 'issue_09:_decentralized_anonymous_authentication',
        author: { 
            href: priority_authors.apps.href,
            name: priority_authors.apps.name
        },
        details: 'The blockchain can be used for things other than just financial transactions. It could be used as a distributed login system, providing paywal features for sites without the need for those sites to also run their own databases.'
    },
    {
        title: 'Issue 10: Search Functionality',
        address: '15Kdtw8TsKkRE24ug9Js7Rwt94CZAa4Gqw',
        slug: 'issue_10:_search_functionality',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'We believe you should be able to search the contents of your wallet.'
    },
    {
        title: 'Issue 11: Event-Storage / Open-Data',
        address: '1MRCCUtRKX1WYDJg9QLEVw5pbH8ja9YtjX',
        slug: 'issue_11:_event_storage_/_open_data',
        author: { 
            href: priority_authors.api.href,
            name: priority_authors.api.name
        },
        details: 'Event storage would allow the blockchains to be replayed and distributed across multiple data-formats, from documents to graphs, where we feel the normalized data should also be openly avaiable for others.'
    },
    {
        title: 'Issue 12: OpenSource Block Parser',
        address: '12Fo53FrW8sS49f4xodhjjBruSnAAJSxHJ',
        slug: 'issue_12:_opensource_block_parser',
        author: { 
            href: priority_authors.apps.href,
            name: priority_authors.apps.name
        },
        details: 'We would eventually like to open-source our own internal parsers, but first need to ensure they are fully module, in-tune with the rest of our stack.'
    },
    {
        title: 'Issue 13: Public User Profiles',
        address: '1Kk7wct3n2eL1DdM4aTf75xipBBqUoka8A',
        slug: 'issue_13:_public_user_profiles',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'This functionality would allow for people to host their own public pages. With an opt-in central directory, payment usernames could then be used too.'
    },
    {
        title: 'Issue 14: Marketplace Back-Bone',
        address: '1BjHwWtiBjFjBupWqvg22Q1q9vCMmxfCnW',
        slug: 'issue_14:_marketplace_back_bone',
        author: { 
            href: priority_authors.api.href,
            name: priority_authors.api.name
        },
        details: 'The marketplace would allow other developers to profit from sharing their work with others.'
    },
    {
        title: 'Issue 15: Marketplace Default Application',
        address: '149kbp3PgbPqEz4NdsbFgQHFd2eBnXamUz',
        slug: 'issue_15:_marketplace_default_application',
        author: { 
            href: priority_authors.apps.href,
            name: priority_authors.apps.name
        },
        details: 'When the marketplace is complete, we feel the default application should then become a portal to that marketplace.'
    },
    {
        title: 'Issue 16: Tools and Extensions',
        address: '1V1ZHtxSgAYxhMvsJ1xeJu1fgNwDKiEXa',
        slug: 'issue_16:_tools_and_extensions',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'This would allow users to customise the default wallet theme by adding extensions or editing styles via the user-interface.'
    },
    {
        title: 'Issue 17: Exchange APIs',
        address: '1CJz46eCwrCLSyhqmM68629pdrEmvJeUqX',
        slug: 'issue_17:_exchange_apis',
        author: { 
            href: priority_authors.api.href,
            name: priority_authors.api.name
        },
        details: 'A complete crypto-currency stack will eventually need its own exchange / brokerage APIs.'
    },
    {
        title: 'Issue 18: Exchange Plugins',
        address: '1HajrPT2avnvrCmRk4YFLKMURP5Xnp6q5w',
        slug: 'issue_18:_exchange_plugins',
        author: { 
            href: priority_authors.apps.href,
            name: priority_authors.apps.name
        },
        details: 'We believe that people should be able to make exchanges from within their wallet.'
    },
    {
        title: 'Issue 19: Multi-Currency Support for Prioritizer',
        address: '1Q8UW6j8wEbpuXDo8C7GrZ5vJKVNHw1zJr',
        slug: 'issue_18:_multi_currency_support_for_prioritizer',
        author: { 
            href: priority_authors.framework.href,
            name: priority_authors.framework.name
        },
        details: 'This priority theme currently only works with Bitcoin. Would like it to work with all available blockchains.'
    }
]