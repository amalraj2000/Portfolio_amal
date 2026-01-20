@php
$experiences = [
    [
        'id' => 1,
        'company' => 'Limenzy Technologies Pvt Ltd',
        'role' => 'PHP Laravel Developer',
        'period' => 'Present',
        'link' => 'https://limenzy.com',
        'description' => 'Currently working as a core developer, managing enterprise-level applications and delivering robust backend solutions. Specializing in scalable architecture and performance optimization.',
        'skills' => ['Laravel 11', 'MySQL', 'APIs']
    ],
    [
        'id' => 2,
        'company' => 'Baabtra',
        'role' => 'Full Stack Internship',
        'period' => '6 Months',
        'location' => 'Calicut',
        'link' => 'https://baabtra.com/',
        'description' => 'Completed intensive training and internship, gaining hands-on experience in full-stack web development technologies including PHP, Laravel, MySQL, and JavaScript.',
        'skills' => ['PHP', 'HTML/CSS', 'JS']
    ]
];
@endphp

<section id="experience" class="section experience-section">
    <div class="exp-bg-1"></div>
    <div class="exp-bg-2"></div>

    <div class="container">
        <div class="section-header fade-in-up">
            <h2 class="section-title">Work <span class="text-gradient">Experience</span></h2>
            <p class="section-subtitle">My professional journey in the tech industry.</p>
        </div>

        <div class="timeline">
            @foreach($experiences as $index => $exp)
                <div class="timeline-item fade-in-up stagger-{{ $index + 1 }}">
                    
                    <div class="timeline-dot"></div>

                    <div class="timeline-content-wrapper">
                        <div class="glass-card exp-card">
                            <h4 class="exp-role">{{ $exp['role'] }}</h4>
                            <h3 class="exp-company">{{ $exp['company'] }}</h3>
                            <p class="exp-desc">{{ $exp['description'] }}</p>
                            
                            @if(isset($exp['skills']))
                                <div class="exp-tags">
                                    @foreach($exp['skills'] as $skill)
                                        <span class="exp-tag">{{ $skill }}</span>
                                    @endforeach
                                </div>
                            @endif

                            @if(isset($exp['link']))
                                <a href="{{ $exp['link'] }}" target="_blank" style="display:inline-block; margin-top:1rem; font-size:0.85rem; color:var(--accent-blue); text-decoration:underline;">
                                    Visit Website
                                </a>
                            @endif
                        </div>
                    </div>

                    <div class="timeline-date-wrapper">
                        <span class="exp-date">{{ $exp['period'] }}</span>
                    </div>
                    
                </div>
            @endforeach
        </div>
    </div>
</section>
