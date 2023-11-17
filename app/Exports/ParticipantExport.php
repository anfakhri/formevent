<?php

namespace App\Exports;

use App\Models\participant;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;

class ParticipantExport implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */

    public function headings(): array
    {
        return [
            '#',
            'Email',
            'Name',
            'Phone Number',
            'Instansi',
            'Created At',
            'Updated At',
        ];
    }

    public function collection()
    {
        return Participant::all()->map(function ($participant, $index) {
            return [
                'id' => $index + 1,
                'email' => $participant->email,
                'name' => $participant->name,
                'phone' => $participant->phone,
                'instansi' => $participant->instansi,
                'created_at' => $participant->created_at->format('d-m-Y H:i:s'),
                'updated_at' => $participant->updated_at->format('d-m-Y H:i:s'),
            ];
        });
    }

    public function styles($sheet)
    {
        return [
            'A' => [
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                ],
            ],
            'A1:G1' => [
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                ],
                'font' => [
                    'bold' => true,
                    'size' => 12
                ]
            ],
        ];
    }

}
