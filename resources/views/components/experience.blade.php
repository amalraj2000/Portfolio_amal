@php
$experiences = [
    [
        'id' => 1,
        'company' => 'Limenzy Technologies Pvt Ltd',
        'role' => 'PHP Laravel Developer',
        'period' => 'Present',
        'link' => 'https://limenzy.com',
        'description' => 'Currently working as a core developer, managing enterprise-level applications and delivering robust backend solutions.'
    ],
    [
        'id' => 2,
        'company' => 'Baabtra',
        'role' => 'Internship',
        'period' => '6 Months',
        'location' => 'Calicut',
        'link' => 'https://baabtra.com/',
        'description' => 'Completed intensive training and internship, gaining hands-on experience in full-stack web development technologies.'
    ]
];
@endphp

<section id="experience" class="section experience-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Work <span class="highlight">Experience</span></h2>
            <p class="section-subtitle">My professional journey in the tech industry.</p>
        </div>

        <div class="experience-timeline">
            @foreach($experiences as $exp)
                <div class="timeline-item glass">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="exp-period">{{ $exp['period'] }}</span>
                        <h3 class="exp-company">{{ $exp['company'] }}</h3>
                        <h4 class="exp-role">
                            {{ $exp['role'] }}
                            @if(isset($exp['location']))
                                <span>| {{ $exp['location'] }}</span>
                            @endif
                        </h4>
                        <p class="exp-desc">{{ $exp['description'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
