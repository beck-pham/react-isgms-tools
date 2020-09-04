export const NON_DISK_TICKETS = {
  labels: [
    'NetApp',
    'ZFSSA',
    'MapR',
    'Isilon',
    'Cisco',
    'Brocade',
    'SilverPeak',
    'Linux/Solaris',
    'Avere'
  ],
  datasets: [
    {
      label: 'Non-Disk Tickets Count Per Vendor',
      data: [22, 0, 11, 2, 1, 1, 4, 0, 1],
      backgroundColor: [
        '#ffc107',
        '#2e7d32',
        '#03a9f4',
        '#ff5252',
        '#9575cd',
        '#b71c1c',
        '#78909c',
        '#1b5e20',
        '#6200ea'
      ]
    }
  ]
};

export const NETAPP_DISK_TICKETS = {
  labels: [
    '450GB',
    '600GB-10K SAS',
    '600GB-15K SAS',
    '900GB SAS',
    '1TB SATA',
    '1.2TB SAS',
    '1.8TB SAS',
    '2TB SATA'
  ],
  datasets: [
    {
      label: 'Netapp Disk Model',
      data: [0, 380, 29, 1, 0, 128, 0, 42],
      backgroundColor: [
        '#78909c',
        '#ff5252',
        '#2e7d32',
        '#03a9f4',
        '#b71c1c',
        '#ffc107',
        '#1b5e20',
        '#9575cd'
      ]
    }
  ]
};

export const ISILON_DISK_TICKETS = {
  labels: ['1.2TB SAS', '2TB SATA', '3TB SATA', '600GB-10K SAS'],
  datasets: [
    {
      label: 'Isilon Disk Model',
      data: [5, 0, 0, 20],
      backgroundColor: ['#ffc107', '#2e7d32', '#03a9f4', '#ff5252'],
      barThickness: 30
    }
  ]
};

export const MAPR_DISK_TICKETS = {
  labels: ['TOTAL'],
  datasets: [
    {
      label: 'Mapr Disk Model',
      data: [36],
      backgroundColor: ['#2e7d32'],
      barThickness: 30
    }
  ]
};
